using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AzFunctionsApi
{

    public record Data(string Key, string Payload);

    public static class Function1
    {
        [FunctionName("HelloWorld")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var data = new Data("Greeting", "Hello World");
            return new OkObjectResult(data);
        }
    }
}
