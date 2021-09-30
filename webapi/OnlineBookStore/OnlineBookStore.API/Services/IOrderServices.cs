using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public interface IOrderServices
    {
        void AddOrder(Order ord);
    }
}
