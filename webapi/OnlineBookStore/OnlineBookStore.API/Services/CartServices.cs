using OnlineBookStore.API.Models;
using OnlineBookStore.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public class CartServices : ICartServices
    {
        private readonly ICartRepo _cartRepo;

        public CartServices(ICartRepo cartRepo)
        {
            _cartRepo = cartRepo;
        }
        public void AddCart(Cart cart)
        {
            
            _cartRepo.AddCart(cart);
        }

        public void DeleteCartData(int bookId)
        {
            _cartRepo.DeleteCartData(bookId);
        }

        public IEnumerable<Cart> GetAllCart()
        {
            return _cartRepo.GetAllCart();
        }

        public object GetCartByUserid(int id)
        {
            return _cartRepo.GetCartByUserid(id);
        }
    }
}
