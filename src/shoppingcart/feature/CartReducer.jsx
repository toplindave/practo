export const totalItem = (cart) => {
	return cart.reduce((sum, product) => sum + product.quantity, 0);
};
export const totalPrice = (cart) => {
	return cart.reduce(
		(total, product) => total + product.quantity * product.price,
		0
	);
};

const CartReducer = (state, action) => {
	switch (action.type) {
		case "Add":
			return [...state, action.product];

		case "Remove":
			return state.filter((p) => p.id !== action.id);

		case " Increase":
			const IndexI = state.findIndex((p) => p.id === action.id);
			state[IndexI].quantity = state[IndexI].quantity + 1;
			return [...state];

		case "Decrease":
			const IndexD = state.findIndex((p) => p.id === action.id);
			state[IndexD].quantity = state[IndexI].quantity - 1;
			console.log(state);

			return [...state];
		default:
			return state;
	}
};

export default CartReducer;
