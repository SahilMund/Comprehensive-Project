using Microsoft.EntityFrameworkCore;
using OnlineBookStore.API.CustomException;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public class CartRepo : ICartRepo
    {
        private readonly OnlineBookStoreDBContext _dbContext;

        public CartRepo(OnlineBookStoreDBContext dbContext)
        {
            _dbContext = dbContext;  
        }
        public void AddCart(Cart cart)
        {
            if(cart == null)
            {
                throw new NoValueFoundException("Cart is Empty , No value Found");
            }
            _dbContext.Carts.Add(cart);
            _dbContext.SaveChanges();
        }

        public void DeleteCartData(int bookId)
        {
            var cartDetails = _dbContext.Carts.First(s => s.BookId == bookId);
            if (cartDetails == null)
            {
                throw new ArgumentNullException();
            }
            _dbContext.Entry(cartDetails).State = EntityState.Deleted;
            _dbContext.SaveChanges();
        }

        public IEnumerable<Cart> GetAllCart()
        {
            return _dbContext.Carts.ToList();
        }

        public object GetCartByUserid(int id)
        {
          var cartData=  (from p in _dbContext.Carts
             join e in _dbContext.Books
             on p.BookId equals e.BookId
             where p.UserId == id
             select new
             {
                 BookId = e.BookId,
                 BookName = e.BookName,
                 Price = e.Price,
                 Quantity = p.Quantity,
                 SumTotal = p.SumTotal
             }).ToList();

            return cartData;
        }
    }
}
