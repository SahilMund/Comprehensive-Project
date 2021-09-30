using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public interface ICartRepo
    {
        IEnumerable<Cart> GetAllCart();

        object GetCartByUserid(int id);
        void AddCart(Cart cart);

        void DeleteCartData(int bookId);
    }
}
