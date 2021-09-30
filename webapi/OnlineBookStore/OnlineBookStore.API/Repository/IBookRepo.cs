using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public interface IBookRepo
    {
        IEnumerable<Book> GetAllBook();

        object GetCategories();

        Book GetBookById(int id);

        void AddBook(Book book);
        void UpdateReview(int bookid, JsonPatchDocument reviewData);
        }
}
