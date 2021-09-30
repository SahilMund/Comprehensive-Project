using OnlineBookStore.API.Models;
using OnlineBookStore.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly IOrderRepo _orderRepo;

        public OrderServices(IOrderRepo orderRepo )
        {
            _orderRepo = orderRepo;
        }
        public void AddOrder(Order ord)
        {
            _orderRepo.AddOrder(ord);
        }
    }
}
