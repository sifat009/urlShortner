export const urlReducer = (state, action) => {
  switch (action.type) {
    case "ADD_URL":
      const { longUrl = "", shortUrl = "", count = 0 } = action.payload;
      return [
        ...state,
        {
          longUrl,
          shortUrl,
          count
        }
      ];

    default:
      return state;
  }
};
