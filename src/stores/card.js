import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Labels from "../Labels.js";

const GET_DECK_API_URL = "https://www.deckofcardsapi.com/api/deck/new/";
let DRAW_CARD_API_URL = "";

const cardColorMap = {
  [Labels.spades]: Labels.black,
  [Labels.clubs]: Labels.black,
  [Labels.hearts]: Labels.red,
  [Labels.diamonds]: Labels.red,
};
export const cardStore = defineStore("cardStore", {
  state: () => ({
    card: undefined,
    cardImageUrl: undefined,
    cardCode: undefined,
    deck: undefined,
    deckId: undefined,
    canDraw: false,
  }),
  getters: {
    cardUrl(state) {
      return `https://www.deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`;
    },
    getCardImageUrl(state) {
      return state.cardImageUrl;
    },
  },
  actions: {
    // Need to reset canDraw when game resets
    // Ideas:
    // Access this store within the gameState store and reset it there
    // OR
    // Access this store within the component that will have the reset game button
    // then call reset action functions for both stores within a function there
    async getNewDeck() {
      try {
        const response = await fetch(GET_DECK_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let responseJSON = await response.json();
        this.deck = responseJSON;
        console.log(responseJSON);
        this.deckId = this.deck.deck_id;
        this.canDraw = true;
      } catch (error) {
        console.error(error);
      }
    },
    async drawCard() {
      if (this.canDraw) {
        try {
          const response = await fetch(this.cardUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          let responseJSON = await response.json();
          this.card = responseJSON;
          console.log(responseJSON);
          this.cardImageUrl = responseJSON.cards[0].images.png;
          // console.log(responseJSON.cards[0].suit);
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});
