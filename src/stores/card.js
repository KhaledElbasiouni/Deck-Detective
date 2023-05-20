import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Labels from "../Labels.js";

const GET_DECK_API_URL =
  "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

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
    firstCardRank: undefined,
  }),
  getters: {
    cardUrl(state) {
      return `https://www.deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`;
    },
    getCardImageUrl(state) {
      return state.cardImageUrl;
    },
    cardColor(state) {
      if (state.cardCode[1] === "S" || state.cardCode[1] === "C") {
        return Labels.black;
      } else {
        return Labels.red;
      }
    },
    cardRank(state) {
      if (state.cardCode[0] === "0") {
        return "10";
      }
      return state.cardCode[0];
    },
    cardSuit(state) {
      return state.cardCode[1];
    },
  },
  actions: {
    clearDeck() {
      this.$reset();
    },
    async getNewDeck() {
      try {
        const response = await fetch(GET_DECK_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let responseJSON = await response.json();
        this.deck = responseJSON;
        console.log("Deck: ");
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
          this.cardCode = responseJSON.cards[0].code;
          console.log("Card: ");
          console.log(responseJSON);
          console.log("Card code:" + this.card.cards[0].code);
          this.cardImageUrl = responseJSON.cards[0].image;
          // console.log(responseJSON.cards[0].suit);
          if (this.firstCardRank === undefined) {
            this.firstCardRank = this.cardRank;
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});
