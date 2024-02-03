const flightsSlice = createSlice({
  name: "flights",
  defaultFlights: [],

  reducers: {
    defaultFlightsAdded(state, action) {
      state.defaultFlights = action.payload;
    },
  },
});

export const { defaultFlightsAdded } = todosSlice.actions
export default flightsSlice.reducer
