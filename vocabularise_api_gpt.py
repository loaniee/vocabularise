import openai

# Step 1: Add your API key
openai.api_key = "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"
# Step 2: Define the input
context = "The hurricane devastated the entire coastal village."
word = "devastated"
ipa_choice = "American" # or "British"

# Step 3: Create the prompt
prompt = f"""
You are an English vocabulary tutor. A student highlighted the word "{word}" in the sentence: "{context}"

Please provide:
1. The meaning of the word based on the context (turn the word into its bare form if necessary)
2. Its IPA (International Phonetic Alphabet) pronunciation with respect to {ipa_choice} (British or American English)
3. 2-3 synonyms based on context
4. 2-3 antonyms based on context

Format the response like:
Meaning:
IPA:
Synonyms:
Antonyms:
Given context:
"""

# Step 4: Call OpenAI API (GPT-4 or 3.5-turbo)
response = openai.chat.completions.create(
    model="gpt-4.1",
    messages=[
        {"role": "user", "content": prompt}
    ],
    temperature=0.7,
    max_tokens=300)

# Step 5: Parse and print result
print(response['choices'][0]['message']['content'])
