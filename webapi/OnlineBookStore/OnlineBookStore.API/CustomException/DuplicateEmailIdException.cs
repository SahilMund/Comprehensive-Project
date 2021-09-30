using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace OnlineBookStore.API.CustomException
{
    public class DuplicateEmailIdException : Exception
    {
        public DuplicateEmailIdException()
        {
        }

        public DuplicateEmailIdException(string message) : base(message)
        {
        }

        public DuplicateEmailIdException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected DuplicateEmailIdException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
