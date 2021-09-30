using log4net;
using log4net.Config;
using log4net.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    [Route("Order")]
    [ApiController]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IOrderServices _ordService;
        private readonly ILogger<OrderController> _logger;

        public OrderController(IOrderServices ordService, ILogger<OrderController> logger)
        {
            _ordService = ordService;
            _logger = logger;
        }

        /// <summary>
        /// Add a order of the user
        /// </summary>
        /// <param name="ord"></param>
        [HttpPost]
        public void AddOrder(Order ord)
        {
            _logger.LogInformation("Start : Adding order Data to the Database");
            if (ord != null)
            {
                _ordService.AddOrder(ord);
               
            }
            _logger.LogInformation("End : Successfully added order Data to the Database");
        }
    }
}
