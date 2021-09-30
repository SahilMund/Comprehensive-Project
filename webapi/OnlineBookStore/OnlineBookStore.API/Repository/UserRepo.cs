using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.CustomException;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public class UserRepo : IUserRepo
    {
        private readonly OnlineBookStoreDBContext _dbContext;

        public UserRepo(OnlineBookStoreDBContext dBContext)
        {
            _dbContext = dBContext;
        }
        public void AddUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            var isduplicate = _dbContext.Users.Count(s => s.Email == user.Email);
            if (isduplicate < 1)
            {
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
            }
            else
            {
                throw new DuplicateEmailIdException("Email ID Already Present");
            }
           
        }

        public IEnumerable<User> GetAllUser()
        {
            return _dbContext.Users.ToList();
        }

        public void UpdatePassword(string email, JsonPatchDocument passwordBody)
        {
            if(email == null && passwordBody == null)
            {
                throw new ArgumentNullException(nameof(email));
            }

            try
            {
                var user = _dbContext.Users.First(s => s.Email == email);
                passwordBody.ApplyTo(user);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new NoValueFoundException("No Value Found",ex);
            }

           
        }
    }
}
