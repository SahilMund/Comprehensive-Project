using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.Models;
using OnlineBookStore.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Services
{
    public class BookServices : IBookServices
    {
        private IBookRepo _bookRepo;

        public BookServices(IBookRepo bookRepo)
        {
            _bookRepo = bookRepo;
        }
        public void AddBook(Book book)
        {
            _bookRepo.AddBook(book);
        }

        public IEnumerable<Book> GetAllBook()
        {
            return _bookRepo.GetAllBook();
        }

        public Book GetBookById(int id)
        {
            return _bookRepo.GetBookById(id);
        }

        public object GetCategories()
        {
            return _bookRepo.GetCategories();
        }

        public void UpdateReview(int bookid, JsonPatchDocument reviewData)
        {
             _bookRepo.UpdateReview(bookid, reviewData);
        }
    }
}
