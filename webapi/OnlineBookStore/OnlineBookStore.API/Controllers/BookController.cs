using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineBookStore.API.Models;
using OnlineBookStore.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBookStore.API.Controllers
{
    [Route("Book")]
    [ApiController]
    [Authorize]
    public class BookController : ControllerBase
    {
        private readonly IBookServices _bookServ;
        private readonly ILogger<BookController> _logger;

        public BookController(IBookServices bookServ,ILogger<BookController> logger )
        {
            _bookServ = bookServ;
            _logger = logger;
        }

        /// <summary>
        /// Fetching all the book data
        /// </summary>
        /// <returns>Ienumerable Book</returns>
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetAllBook()
        {
            _logger.LogInformation("Start: Fetching All book data for displaying in home page");
            var book = _bookServ.GetAllBook();
            if (book == null)
            {
                _logger.LogError("Getting null value");
                return NotFound();
            }
            _logger.LogInformation("End : Successfully fetched all the book data");
            return Ok(book);
        }

        /// <summary>
        /// Getting book data by categories  like bestseller,latest and trending books
        /// </summary>
        /// <returns>Ienumerable Book</returns>
        [Route("bookCategories")]
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetCategories()
        {
            _logger.LogInformation("Start: Fetching  book data by categories like bestseller,latest and trending books");
            var cartDetails =  _bookServ.GetCategories();
           
            if(cartDetails == null)
            {
                _logger.LogError("Getting null value");
                return NotFound();
            }

            _logger.LogInformation("End : Successfully fetched  book by category");
            return Ok(cartDetails);
        }

        /// <summary>
        /// Get book data by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Book</returns>
        [HttpGet]
        [Route("{id}")]
        public ActionResult<Book> GetBookById(int id)
        {
            _logger.LogInformation("Start: Fetching  book by id");
            var bookbyid = _bookServ.GetBookById(id);
            if (bookbyid == null)
            {
                _logger.LogError("Getting null value");
                return NotFound();
            }

            _logger.LogInformation("End : Successfully fetched  book by id");
            return Ok(bookbyid);
        }

        /// <summary>
        /// Adding a book data of an user
        /// </summary>
        /// <param name="book"></param>
        [HttpPost]
        public void AddBook(Book book)
        {
            _logger.LogInformation("Start: Adding  book in the database");
            if (book != null)
            {
                _bookServ.AddBook(book);
               
            }

            _logger.LogInformation("End: Successfully added  book by id");

        }

        /// <summary>
        /// adding review to the books
        /// </summary>
        /// <param name="bookid"></param>
        /// <param name="reviewData"></param>
        /// <returns></returns>
        [HttpPatch]
        [Route("{bookid}")]
        public ActionResult UpdateReview(int bookid, JsonPatchDocument reviewData)
        {
            _logger.LogInformation("Start: Adding book review in the database using patch http method");
            _bookServ.UpdateReview(bookid,reviewData);
            _logger.LogInformation("End: Successfully added book review");
            return Ok(new { Message = "Review Added Succesfully" });
        }

    }
}
