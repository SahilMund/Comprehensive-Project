using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OnlineBookStore.API.Models;
using OnlineBookStore.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Controllers
{
    [Route("Cart")]
    [ApiController]
    [Authorize]
    public class CartController : ControllerBase
    {

        private readonly ICartServices _cartServ;
        private readonly ILogger<CartController> _logger;

        public CartController(ICartServices cartServ,ILogger<CartController> logger)
        {
            _cartServ = cartServ;
            _logger = logger;
        }

        /// <summary>
        /// Get all cart data 
        /// </summary>
        /// <returns>IEnumerable Cart list</returns>
        [HttpGet]
        public ActionResult<IEnumerable<Cart>> GetAllCart()
        {
            _logger.LogInformation("Start: Fetching All cart data to display in a tabular format");
            var cart =_cartServ.GetAllCart();
            _logger.LogWarning("cart value must not be null");
            if (cart == null)
            {
                _logger.LogError("Getting null value");
                return NotFound();
            }
            _logger.LogInformation("End : Successfully fetched all the cart data");
            return Ok(cart);
        }

        /// <summary>
        /// Getting cart data by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Cart</returns>

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Cart> GetCartByUserid(int id)
        {
            _logger.LogInformation("Start: Fetching  cart data by id");
            var cartData = _cartServ.GetCartByUserid(id);

            if (cartData == null )
            {
                _logger.LogError("Getting null value");
                return NotFound();
            }
            _logger.LogInformation("End : Successfully fetched cart data by id");
            return Ok(cartData);
        }

        /// <summary>
        /// Adding cart data of an user
        /// </summary>
        /// <param name="cart"></param>
        [HttpPost]
        public void AddCart(Cart cart)
        {
            _logger.LogInformation("Start: Adding cart data of an user");
            if (cart != null)
            {
                _cartServ.AddCart(cart);
            }
            _logger.LogInformation("End : Successfully added cart data");

        }


        /// <summary>
        /// Delete a single cart data of an user
        /// </summary>
        /// <param name="bookId"></param>
        [HttpDelete]
        [Route("{bookId}")]
        public void DeleteCartData(int bookId)
        {
            _logger.LogInformation("Start: Deleted cart data of an user by cartid");
            if (bookId != 0)
            {
            _cartServ.DeleteCartData(bookId);
            }

            _logger.LogInformation("End : Successfully deleted cart data");
        }


    }
}
