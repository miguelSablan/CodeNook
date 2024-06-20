import Sidebar from "@/components/Sidebar";
import { Post } from "@/components/Post";

const Home = () => {
  const posts = [
    {
      id: "1",
      user: "JaneDoe",
      title: "Building a Weather App with React and Tailwind CSS",
      date: "2024-06-13",
      text: "In this post, I'll walk you through building a weather application using React and Tailwind CSS. We'll use the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface. The app will allow users to search for the current weather conditions in any city. Here's the code for the main component of our app: In this post, I'll walk you through building a weather application using React and Tailwind CSS. We'll use the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface. The app will allow users to search for the current weather conditions in any city. Here's the code for the main component of our app: In this post, I'll walk you through building a weather application using React and Tailwind CSS. We'll use the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface. The app will allow users to search for the current weather conditions in any city. Here's the code for the main component of our app:",
      codeSnippet: `import React, { useState } from 'react';\nimport axios from 'axios';\n\nconst WeatherApp = () => {\n  const [city, setCity] = useState('');\n  const [weather, setWeather] = useState(null);\n\n  const fetchWeather = async () => {\n    const response = await axios.get(\n      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY\`\n    );\n    setWeather(response.data);\n  };\n\n  return (\n    <div className="p-4 max-w-md mx-auto">\n      <input\n        type="text"\n        value={city}\n        onChange={(e) => setCity(e.target.value)}\n        className="p-2 border rounded w-full"\n        placeholder="Enter city name"\n      />\n      <button\n        onClick={fetchWeather}\n        className="bg-blue-500 text-white p-2 rounded mt-2 w-full"\n      >\n        Get Weather\n      </button>\n      {weather && (\n        <div className="mt-4">\n          <h2 className="text-2xl font-bold">{weather.name}</h2>\n          <p>{Math.round(weather.main.temp - 273.15)}°C</p>\n          <p>{weather.weather[0].description}</p>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default WeatherApp;`,
      language: "javascript",
    },
    {
      id: "2",
      user: "JohnSmith",
      title: "Understanding the Basics of Python Decorators",
      date: "2024-06-12",
      text: "Python decorators are a powerful feature that allows you to modify the behavior of a function or class. They are often used in web frameworks like Flask and Django to handle things like authentication and logging. In this post, I'll explain how decorators work and provide some examples to illustrate their usage. Here's a simple example of a decorator that logs the execution time of a function: Python decorators are a powerful feature that allows you to modify the behavior of a function or class. They are often used in web frameworks like Flask and Django to handle things like authentication and logging. In this post, I'll explain how decorators work and provide some examples to illustrate their usage. Here's a simple example of a decorator that logs the execution time of a function: Python decorators are a powerful feature that allows you to modify the behavior of a function or class. They are often used in web frameworks like Flask and Django to handle things like authentication and logging. In this post, I'll explain how decorators work and provide some examples to illustrate their usage. Here's a simple example of a decorator that logs the execution time of a function:",
      codeSnippet: `import time\n\ndef log_execution_time(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs)\n        end_time = time.time()\n        print(f"Executed {func.__name__} in {end_time - start_time} seconds")\n        return result\n    return wrapper\n\n@log_execution_time\ndef slow_function():\n    time.sleep(2)\n    print("Function complete!")\n\nslow_function()`,
      language: "python",
    },
    {
      id: "3",
      user: "AliceJohnson",
      title: "React Tips",
      date: "2024-06-10",
      text: "Here are some useful tips for working with React. React is a powerful JavaScript library for building user interfaces. One of the key concepts in React is the use of components, which allow you to break down your UI into reusable pieces. Below is a simple example of a functional component in React.",
      codeSnippet: `import React from 'react';\n\nconst App = () => {\n  return (\n    <div>\n      <h1>Hello, world!</h1>\n    </div>\n  );\n};\n\nexport default App;`,
      language: "javascript",
    },
    {
      id: "4",
      user: "BobBrown",
      title: "JavaScript Tricks",
      date: "2024-06-09",
      text: "Learn some amazing tricks with JavaScript! JavaScript is a versatile language that allows you to do a lot with just a few lines of code. One interesting trick is using the Set object to create a unique array from an existing array, effectively removing any duplicate values.",
      codeSnippet: `const uniqueArray = (arr) => [...new Set(arr)];\n\n// Example usage:\nconst numbers = [1, 2, 2, 3, 4, 4, 5];\nconst uniqueNumbers = uniqueArray(numbers);\nconsole.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]`,
      language: "javascript",
    },
    {
      id: "5",
      user: "CharlieDavis",
      title: "CSS Magic",
      date: "2024-06-08",
      text: "Make your web pages look awesome with these CSS tricks. CSS allows you to style your web pages and create visually appealing designs. One powerful feature of CSS is the use of gradients to create smooth transitions between colors. Below is an example of how to apply a linear gradient to the background of a webpage.",
      codeSnippet: `body {\n  background: linear-gradient(to right, #ff7e5f, #feb47b);\n}\n\n/* Additional CSS tricks */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  color: white;\n  font-family: Arial, sans-serif;\n}`,
      language: "css",
    },
  ];

  return (
    <div className="h-screen flex md:flex-row overflow-hidden">
      <Sidebar />
      <div className="bg-[#242323] flex justify-center items-start flex-1 p-4 text-white min-h-screen overflow-y-auto">
        <div className="w-full max-w-2xl mt-10">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              user={post.user}
              title={post.title}
              date={post.date}
              text={post.text}
              codeSnippet={post.codeSnippet}
              language={post.language}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
