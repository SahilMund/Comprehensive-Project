using Microsoft.AspNetCore.JsonPatch;
using OnlineBookStore.API.CustomException;
using OnlineBookStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Repository
{
    public class BookRepo : IBookRepo
    {

        private readonly OnlineBookStoreDBContext _dbContext;

        public BookRepo(OnlineBookStoreDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddBook(Book book)
        {
           if(book == null)
            {
                throw new NoValueFoundException();
            }
            _dbContext.Books.Add(book);
            _dbContext.SaveChanges();
        }

        public IEnumerable<Book> GetAllBook()
        {
            return _dbContext.Books.ToList();
        }

        public Book GetBookById(int id)
        {
            return _dbContext.Books.Find(id);
        }

        public object GetCategories()
        {
            var LatestUploads = _dbContext.Books.OrderByDescending(s => s.BookId).Take(3);


            var BestSellers = (from b in _dbContext.Books
                               join o in _dbContext.Orders
                               on b.BookId equals o.BookId

                               select new
                               {
                                   BookId = b.BookId,
                                   BookName = b.BookName,
                                   BookImg = b.BookImg,
                                   Descrption = b.Description,
                                   AuthorName = b.AuthortName

                               }).Take(1);

            var TrendingBooks = _dbContext.Books.Where(s => s.Review >= 3).Take(3);

            var catData = new { LatestUploads = LatestUploads, BestSellers = BestSellers, TrendingBooks = TrendingBooks };

            return catData;
        }

        public void UpdateReview(int bookid, JsonPatchDocument reviewData)
        {
            var user = _dbContext.Books.Find(bookid);

            if (user == null)
            {
                throw new NoValueFoundException();
            }

            reviewData.ApplyTo(user);
            _dbContext.SaveChanges();

           
        }
    }
}
