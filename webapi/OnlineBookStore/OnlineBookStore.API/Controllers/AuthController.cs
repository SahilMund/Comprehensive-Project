using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly OnlineBookStoreDBContext _dbcontext;
        private readonly ILogger<AuthController> _logger;

        public AuthController(OnlineBookStoreDBContext dBContext,ILogger<AuthController> logger)
        {
            _dbcontext = dBContext;
            _logger = logger;
        }
        
       
        /// <summary>
        /// LogIn to the application by jwt authentication
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        /// 
        [HttpPost, Route("login")]
        public IActionResult LogIn([FromBody] LogInModel user)
        {
            _logger.LogInformation("Start: fetching Data from email and password and validating them for authorization");
            if (user == null)
                return BadRequest("Invalid Client Request");

            var isUser = _dbcontext.Users.Count(s => s.Email == user.Email && s.Password == user.Password);
            var userData = _dbcontext.Users.Where(s => s.Email == user.Email && s.Password == user.Password);

            _logger.LogInformation("Checking any user present or not by email and password povided by user");
            if (isUser > 0)
            {
                _logger.LogInformation("JWT Handler starts.......");
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@032"));
                var signInCredential = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOption = new JwtSecurityToken(
                    issuer: "https://localhost:44321",
                    audience: "https://localhost:44321",
                   
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signInCredential
                    );

                _logger.LogInformation("jsonwebtoken generated succesfully");
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOption);
                _logger.LogInformation("End : Providing User JWT Token");
                return Ok(new { Token=tokenString , userData=userData });
            }
            _logger.LogError("Authorization Failed !! Invalid EmailId /Password");
            return Unauthorized("Invalid EmailId /Password");
        }
    }
}
