import React from 'react';
import { Link } from 'react-router-dom';

const CarGrid = () => {
  return (
    <div>
      <h1>All Cars</h1>

      {/* Sorting Filters */}
      <div>
        <label>Sort By:</label>
        <select>
          <option value="price">Price</option>
          <option value="year">Year</option>
          <option value="make">Make</option>
        </select>

        <label>Order:</label>
        <select>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Grid for Displaying Cars */}
      <div>
        {/* Example Car Item */}
        <Link to="/cars/{car_id}">
          <div>
            <img src="image_url" alt="Car Name" />
            <h3>Car Make and Model</h3>
            <p>Price: $amount</p>
            <p>Year: year</p>
          </div>
        </Link>
      </div>

      {/* Pagination */}
      <div>
        <button>Previous</button>
        <span>Current Page</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default CarGrid;
