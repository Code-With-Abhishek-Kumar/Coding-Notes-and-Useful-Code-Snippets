
##  **Query Chaining And Query Options**





### Query Options

Mongoose queries support various options that modify how the query behaves, including sorting, limiting results, or including/excluding specific fields.


`sort()`

- Sorts the documents based on a specified field. Use -1 for descending order and 1 for ascending order.

- Documents ko kisi specific field ke basis pe sort karta hai. -1 descending order ke liye aur 1 ascending order ke liye use hota hai.

`limit()`

- Limits the number of documents returned by the query.

- Query ke result mein kitne documents chahiye, woh limit karta hai.

`skip()`

- Skips the first 'n' documents from the query result.

- Query ke result mein se pehle 'n' documents ko skip karta hai.

`select()`

- Allows you to include or exclude specific fields in the query results.

- Query result mein specific fields ko include ya exclude karta hai.

`lean()`

- Returns plain JavaScript objects instead of Mongoose documents, making queries faster.

- Mongoose documents ke bajaye plain JavaScript objects return karta hai, jo queries ko fast banaata hai.

`hint()`

- Specifies which index to use for the query.

- Query ke liye kaunsa index use karna hai, specify karta hai.


`collation()`

- String comparison ko control karta hai query mein, jaise case-insensitive comparison.

- Allows you to control how string comparison works in your query (e.g., case-insensitive).



### Query Chaining
- You can chain multiple query methods together to create complex queries in a more readable and efficient way. Query chaining lets you combine different operations such as filtering, sorting, limiting, and skipping, all in one go.

- Aap query methods ko chain kar sakte ho ek sath taaki ek complex query ban sake. Query chaining se aap alag-alag operations jaise filtering, sorting, limiting aur skipping ko ek hi query mein combine kar sakte ho.

`Example:`

```javascript
Model.find({ name: 'John' })
  .sort({ age: -1 })
  .limit(5)
  .skip(10);
```


