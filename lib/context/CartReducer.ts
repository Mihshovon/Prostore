interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
//actin type-----------
type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREMENT"; payload: { id: string; stock: number } }
  | { type: "DECREMENT"; payload: string }
  | { type: "CLEAR_CART" };

export function cartReducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      } else {
        return [
          ...state,
          { ...action.payload, quantity: action.payload.quantity },
        ];
      }
    }
    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity < action.payload.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREMENT": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
    }
    case "CLEAR_CART": {
      return [];
    }
  }
}
