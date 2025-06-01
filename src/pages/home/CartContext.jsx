// CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Initial state for cart
const initialState = {
  items: [],
  isOpen: false,
};

// Create context
const CartContext = createContext();

// Cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        };
      } else {
        // Add new item with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity } 
            : item
        )
      };
      
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };
      
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
      
    default:
      return state;
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state]);
  
  // Add item to cart
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    // Auto open cart when adding an item (optional)
    dispatch({ type: 'TOGGLE_CART' });
  };
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  
  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      // If quantity is less than 1, remove the item
      removeFromCart(productId);
    } else {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { id: productId, quantity } 
      });
    }
  };
  
  // Toggle cart visibility
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };
  
  // Close cart
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };
  
  // Clear all items from cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  // Calculate total items in cart
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = state.items.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
    
  // Find items by ID (useful for checking if item exists)
  const getItemById = (productId) => {
    return state.items.find(item => item.id === productId);
  };
  
  // Check if item exists in cart
  const isInCart = (productId) => {
    return !!getItemById(productId);
  };
  
  // Get current quantity of an item
  const getItemQuantity = (productId) => {
    const item = getItemById(productId);
    return item ? item.quantity : 0;
  };
  
  // Value object with all cart state and functions
  const cartContextValue = {
    cart: state,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    closeCart,
    clearCart,
    itemCount,
    subtotal,
    isInCart,
    getItemQuantity,
    getItemById
  };
  
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;