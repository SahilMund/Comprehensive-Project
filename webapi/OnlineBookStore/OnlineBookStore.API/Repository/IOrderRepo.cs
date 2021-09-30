using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public interface IOrderRepo
    {
         void AddOrder(Order ord);
    }
}
