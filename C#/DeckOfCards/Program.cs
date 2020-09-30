using System;
using System.Collections.Generic;
using System.Linq;

namespace DeckOfCards
{
    public class Card
    {
        public Card(string rank, string suit)
        {
            this.Rank = rank;
            this.Suit = suit;
        }
        public string Rank { get; set; }
        public string Suit { get; set; }
        public int OrderKey { get; set; }
        public override string ToString()
        {
            return $"{this.Rank} of {this.Suit}";
        }
    }
    public class Deck
    {
        public List<Card> Cards { get; private set;}
        public Deck()
        {
            this.Cards = new List<Card>(); 
            this.Initialize();
        }

        public void Shuffle()
        {
            Random rand = new Random();
            foreach(Card card in this.Cards)
            {
                card.OrderKey = rand.Next(10000);
            }
        }

        public Card Deal()
        {
            Card card = this.Cards.OrderBy(x => x.OrderKey).FirstOrDefault();
            this.Cards.Remove(card);
            return card;
        }

        public void Initialize()
        {
            string [] ranks = new string[]{"Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Ace"};
            string [] suits = new string[]{"Hearts","Diamonds","Clubs","Spades"};
            this.Cards.Clear();
            foreach(string rank in ranks)
            {
                foreach(string suit in suits)
                {
                    this.Cards.Add(new Card(rank, suit));
                }
            }
        }
        public void PrintDeck()
        {
            Console.WriteLine("==== DECK ====");
            for(Card card = this.Deal(); card != null; card = this.Deal())
            {
                Console.Write(card+", ");
            }
            Console.WriteLine();           
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Deck deck = new Deck();
            deck.PrintDeck();
            deck.Initialize();
            deck.Shuffle();
            deck.PrintDeck();
        }
    }
}
