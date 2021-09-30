using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.Models;
using OnlineBookStore.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public class UserServices : IUserServices
    {
        private readonly IUserRepo _userRepo;

        //constructor dependency injection
        public UserServices(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        public void AddUser(User user)
        {
            _userRepo.AddUser(user);
        }

        public IEnumerable<User> GetAllUser()
        {
           return _userRepo.GetAllUser();
        }

        public void UpdatePassword(string email, JsonPatchDocument passwordBody)
        {
            _userRepo.UpdatePassword(email, passwordBody);
        }
    }
}
