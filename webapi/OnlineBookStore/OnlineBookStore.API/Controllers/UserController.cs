using log4net;
using log4net.Config;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineBookStore.API.Models;
using OnlineBookStore.API.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Controllers
{
    [Route("User")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly IUserServices _userService;
        private readonly ILogger<UserController> _logger;



        public UserController(IUserServices userService,ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }


        /// <summary>
        /// Get all the data of the users
        /// </summary>
        /// <returns>IEnumerable User list data</returns>
        [HttpGet]
   
        public ActionResult<IEnumerable<User>> GetAllUser()
        {
            
            _logger.LogInformation("Start : Fetching all users data");
            var user = _userService.GetAllUser();
            if(user == null)
            {
                _logger.LogError("Data Not Found");
                return NotFound();
                
            }
            _logger.LogInformation("End : Successfully Fetched all users data");
            return Ok(user);
        }

        /// <summary>
        /// To add a user during singup (or) registration
        /// </summary>
        /// <param name="user"></param>
        [HttpPost]
        public void AddUser(User user)
        {
            _logger.LogInformation("Start : Adding users data of :",user);
            if (user != null)
            {
                _userService.AddUser(user);
            }
            _logger.LogInformation("End :  Successfully added user data");

        }

        /// <summary>
        /// Update password during forgot password opeartion
        /// </summary>
        /// <param name="email"></param>
        /// <param name="userPassword"></param>
        /// <returns>object type</returns>
        [HttpPatch]
        [Route("{email}")]
        public ActionResult UpdatePassword(string email, JsonPatchDocument userPassword)
        {
            _logger.LogInformation("Start : Updating Password of an user using http patch method");
            _userService.UpdatePassword(email, userPassword);
           
            _logger.LogInformation("End : Updating Password of an user using http patch method");
            return Ok(new { Message = "Password Updated Succesfully" });
        }


    }
}
