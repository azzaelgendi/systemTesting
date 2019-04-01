using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace PROG2070Assignment4
{
    public class PROG2070Assignment4Tests
    {
        IWebDriver driver; 
        [Test]
        public void Setup()
        {
            driver = new FirefoxDriver();
            driver.Navigate().GoToUrl("file:///C:/Users/AZZA%20ELGENDY/Desktop/github/systemTesting/PROG2070As4/index.html");
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            string title = driver.Title;
            Assert.AreEqual("PROG2070Assign4", title);
        }
        [Test]
        public void Test_Link()
        {
            IWebElement phone = driver.FindElement(By.Id("phone"));
            IWebElement email = driver.FindElement(By.Id("email"));
            IWebElement name = driver.FindElement(By.Id("name"));
            IWebElement city = driver.FindElement(By.Id("city"));
            IWebElement make = driver.FindElement(By.Id("make"));
            IWebElement model = driver.FindElement(By.Id("model"));
            IWebElement year = driver.FindElement(By.Id("year"));

            phone.Clear();
            email.Clear();
            name.Clear();

            phone.SendKeys("1234567890");
            email.SendKeys("zoza@gmail.com");
            city.SendKeys("kitchener");
            model.SendKeys("rio");
            make.SendKeys("kia");
            year.SendKeys("2019");
            name.SendKeys("Azza");


            IWebElement searchButton = driver.FindElement(By.Id("btnSubmit"));
            IWebElement findLink = driver.FindElement(By.Id("name"));
            Console.WriteLine("submit");
            searchButton.Click();
            string title = driver.Title;
            //"https://www.jdpower.com/Cars/2019/kia/rio";
            Assert.AreEqual(title, "link ready");
        }

        [Test]
        [TearDown]
        public void TeardownTest()
        {
            if (driver != null)
            {
                try
                {
                   // driver.Quit();
                }
                catch (Exception ex)
                {


                }
            }
        }
    }
}
