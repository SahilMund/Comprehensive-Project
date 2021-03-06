using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public interface IUserServices
    {
        IEnumerable<User> GetAllUser();
        void AddUser(User user);

        void UpdatePassword(string email, JsonPatchDocument passwordBody);
    }
}
