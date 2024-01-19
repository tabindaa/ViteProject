const Header = () => {
  return (
    <div className="grid grid-flow-col my-4 py-4 shadow-lg">
      <div className="flex col-span-2">
        <img
          className="w-8 h-8 mx-2"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADIyMjZ2dkjIyMeHh4/Pz/Pz8/c3Ny9vb0uLi7n5+f5+fkqKiqpqanu7u5sbGyCgoIYGBi1tbU0NDQMDAyioqJ8fHycnJxGRkZmZmZOTk46OjqKiopeXl6VlZVYZr55AAACkElEQVR4nO3c2ZaiMBCAYQaw44Is4gINyvu/Zes4znEuyHLmolL4f09QdQKhklRIEgAAAAAAAAAAAERgl6URy3b+mRSbru7zVbTyvu42hV8uptn+it6+MT65lL10oH760p1Ld5CO0tehc47LSTpGfyfH2KRf0hGG+EptuRRX6fjCXG1zWrqSDi/MyjI0xVk6ulDn+aHZfUsHF+p7vhbI9tLBhdpns8kY6djCzdcBJCNrPplFvTOLms2KTjq4UJ2lBEjVlMxPB1txVjXS4YVpKksyidFVNTtWm62iCS13rTWLs5rV2clSZb6y2UgH6ctrg6ZS8bW5Wd/993QukU/Rh0vANuD9aVtHzHMDEAAAAAAAAMC8IttELAvZBUzrYTxuo3Uch9raz/RmNypoB1qNXrvNapqBzu5cFHWcXZ3jEvlhxruDY2yWdEC7qKNz2hol0dYYK9oao/UhyWQKLs78a2tpa6ylgwtVW9oa9X1nZnO5VwDK5ua9rThb1JWTxCi5cPbUO9oaS03rGecVukk6RH+TK5ckaY/SQfo5tu5c7l+b2ygdqNt48+0FNNd66L+i1Q/11ev+7B/F2kjfxp5n6GsEAAAAAAAA/l9lIuZ74fyhMNGfbdbGb1OzWA/SofoYfPZoq1I6TF+l82mrJj3/0Jhc2ZSKOs5Wrr81Kjk2ezpau5uri3R8YS7Wtkbp6ELZ2hqX9Bet3U06uFCWY9oslw4uVE5bY6w+JJlM1Sfz4VPaGhM1FfOLrTpLlc3Nua04KxR1mz1M1gVapmKV+TLMv/6/tZrWM872uVLNa+P88+RjbJQ8aYNXW2M2aWhrnBzvy1+mbYZ9Hq390LQhbY3VOovYOmRLEwAAAAAAAAAAIC4/L/Rkj2ChKHIAAAAASUVORK5CYII="
          alt="menu"
        />
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube icon"
        />
      </div>
      <div className="flex justify-center col-span-8 w-1/2">
        <input
          className="border border-gray-600 rounded-l-full m-1"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-600 bg-gray-100 rounder-r-full">
          search
        </button>
      </div>
      <div className="flex justify-around col-span-2">
        <img
          className="h-8 w-8"
          src="data:image/png;base64,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"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Header;
