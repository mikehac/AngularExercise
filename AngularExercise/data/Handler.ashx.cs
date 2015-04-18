using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AngularExercise.data
{
    /// <summary>
    /// Summary description for Handler
    /// </summary>
    public class Handler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            string rt = context.Request["rt"];
            switch (rt)
            {
                case "GETDBLIST":
                    context.Response.Write(new JavaScriptSerializer().Serialize(GetDbList()));
                    break;
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        private SingleDB[] GetDbList()
        {
            List<SingleDB> data = new List<SingleDB>();
            data.Add(new SingleDB() { details = "Shlonk", name = "Shlonk", type = "database" });
            data.Add(new SingleDB() { details = "Sunny", name = "Sunny", type = "database" });
            data.Add(new SingleDB() { details = "Local", name = "Local", type = "database" });

            return data.ToArray();
        }
    }

    public class SingleDB
    {
        public string name { get; set; }
        public string details { get; set; }
        public string type { get; set; }
    }
}