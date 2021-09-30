using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace OnlineBookStore.API.CustomException
{
    public class NoValueFoundException : Exception
    {
        public NoValueFoundException()
        {
        }

        public NoValueFoundException(string message) : base(message)
        {
        }

        public NoValueFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NoValueFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
