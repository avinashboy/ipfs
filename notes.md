# Web Storage - Day 17

### It provides mechanisms by which browsers can store key/value pairs


* Cookies Storage - 4096 bytes

* Session Storage - 5Mb

* Local Storage - 10MB


* `Cookies` - Cookies are data, stored in small text files, on your computer.

   - In javascript we should use `document.cookie` 
   - Cookie methods:
     - max-age | expires  - In second only ( eg : 60 * 60* 30) | date-in-GMTString-format (eg: Thu, 18 Dec 2013 12:00:00 UTC) (js in build method is : { (new Date).toUTCString() }
     - secure - only be transmitted over secure protocol as https.
     - SameSite - lax**, strict, none
     - path - defaults to the current path 
   ```
   // Now we are setting cookie
   document.cookie = "name=cookie storage; SameSite=none; Secure; max-age=60*60*1000; path=/;"


   // To get the value from the cookie
   let cookie = document.cookie
   console.log('cookie:', cookie)

   // To clear the cookie
    document.cookie = "max-age=0; "
   console.log('cookie:', document.cookie)
   ```


* `sessionStorage` - Available for the duration of the page session. Data is never transferred to the server (as long as the browser is open, including page reloads and restores).
    
    - In javascript we should use `window.sessionStorage` | `sessionStorage`.
        - SessionStorage methods:
            * sessionStorage.setItem('key', 'value') 
            * sessionStorage.getItem('key') 
            * sessionStorage.removeItem('key') 
            * sessionStorage.clear() 
```
// To declare the session

let data = window.sessionStorage
data.setItem('name', 'session storage')

// To get the Data

console.log(data.getItem('name'))

// To remove the Data

console.log(data.removeItem('name'))
console.log(data)

// To clear the Data

console.log(data.clear())
console.log(data)

```


* `localStorage` - same has sessionStorage but persists even when the browser is closed and reopened.

    - In javascript we should use `window.localStorage` | `localStorage`.
        - localStorage method:
            * localStorage.setItem('key', 'value') 
            * localStorage.getItem('key') 
            * localStorage.removeItem('key') 
            * localStorage.clear() 
```
// To declare the local

let data = window.localStorage
data.setItem('name', 'local storage')

// To get the Data

console.log(data.getItem('name'))

// To remove the Data

console.log(data.removeItem('name'))
console.log(data)

// To clear the Data

console.log(data.clear())
console.log(data)

```


# Links:
[For cookie](https://www.w3schools.com/js/js_cookies.asp)

[For sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

[For localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

