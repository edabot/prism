# Deck of Cards

The only extra design was to make the Card class as well. It wasn't
entirely needed, but it was easy to add. It would be handy to have if
there was a need for different display options for the card info such as
"AH" or "Ace of Hearts."

I used the Fisher-Yates algorithm for shuffling the cards. It's O(n),
which is always nice.

If I wanted to be more thorough, I could add testing to make sure that
all of the cards are different after shuffling. That could be done with
a 52-length array or a hash.

#Prism staff

Run with "ruby staff.rb"

I tried a few different ways to do this with JavaScript or jQuery, but
kept having cross-domain issues. Finally looked into Nokogiri and found
it perfectly suited for the task.

The only design decision here was to add a ew line breaks to make the
results a bit easier to read.
