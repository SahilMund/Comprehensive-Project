using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public class OrderRepo : IOrderRepo
    {
        private readonly OnlineBookStoreDBContext _dbContext;

        public OrderRepo(OnlineBookStoreDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void AddOrder(Order ord)
        {
            if (ord != null)
            {
                _dbContext.Orders.Add(ord);
                _dbContext.SaveChanges();
            }

        
        }
    }
}
