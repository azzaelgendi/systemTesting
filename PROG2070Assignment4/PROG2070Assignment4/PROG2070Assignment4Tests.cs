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
        public void Setup_Test()
        {
            driver = new FirefoxDriver();
            driver.Navigate().GoToUrl("file:///C:/Users/AZZA%20ELGENDY/Desktop/github/systemTesting/PROG2070As4/index.html");
            string title = driver.Title;
            Assert.AreEqual("PROG2070Assign4", title);
        }

        [Test]
        public void Test_Url()
        {
            driver.Navigate().GoToUrl("file:///C:/Users/AZZA%20ELGENDY/Desktop/github/systemTesting/PROG2070As4/index.html");
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

            phone.SendKeys("2268683979");
            email.SendKeys("zoza@gmail.com");
            city.SendKeys("kitchener");
            model.SendKeys("rio");
            make.SendKeys("kia");
            year.SendKeys("2019");
            name.SendKeys("Azza");
            IWebElement saveButton = driver.FindElement(By.Name("btnSubmit"));
            saveButton.Click();
            IWebElement showbutton = driver.FindElement(By.Name("btnshow"));
            showbutton.Click();
            IWebElement linkButton = driver.FindElement(By.Name("btnLink"));
            linkButton.Click();
            string url = driver.Url;
            Assert.AreEqual(url, "https://www.jdpower.com/Cars/2019/kia/rio");
        }

        [Test]
        public void Test_Phone()
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

            phone.SendKeys("12345678");
            email.SendKeys("zoza@gmail.com");
            city.SendKeys("kitchener");
            model.SendKeys("rio");
            make.SendKeys("kia");
            year.SendKeys("2019");
            name.SendKeys("Azza");
            IWebElement saveButton = driver.FindElement(By.Name("btnSubmit"));
            saveButton.Click();
            String findElement = driver.FindElement(By.CssSelector("label.error")).Text;
            Assert.IsTrue(findElement.Equals("Please enter a valid phone number"));
        }

        [Test]
        public void Title_Test()
        {
            driver.Navigate().GoToUrl("file:///C:/Users/AZZA%20ELGENDY/Desktop/github/systemTesting/PROG2070As4/pages/searchlink.html");
            IWebElement showbtm = driver.FindElement(By.Name("btnshow"));
            showbtm.Click();
            IWebElement hiddenDiv = driver.FindElement(By.Name("formDivR"));
            Assert.IsTrue(hiddenDiv.Displayed);

        }

        //[Test]
        //public void Show_History_Test()
        //{
        //    driver.Navigate().GoToUrl("file:///C:/Users/AZZA%20ELGENDY/Desktop/github/systemTesting/PROG2070As4/pages/searchhistory.html");
        //    IWebElement showHistory = driver.FindElement(By.Name("AESearchList"));
        //    showHistory.Click();

        //}
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
