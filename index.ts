const unparsedKey = "0F3A7B53-9FE1-42FB-B03E-F79A7B1733BF";

export type UuidKey = string & { __type: "uuidkey" };

const parseKey = (input: string): UuidKey | null => {
  // silly validation
  if (input.length === 36) {
    return input as UuidKey;
  }
  return null;
};

export const lookupUser = (id: UuidKey) => {
  return {
    name: "some user",
    id: id,
  };
};

// Not valid since unparsedKey is a string
// const foundUser = lookupUser(unparsedKey);

const theKey = parseKey(unparsedKey);

// Not valid since theKey might be null
// lookupUser(theKey);

if (theKey === null) {
  console.log("theKey is null");
} else {
  // Now valid because of the explicit null check above
  console.log(lookupUser(theKey));
}

console.log(typeof theKey); // --> string (at runtime)

// UuidKey can also be used inline in lieu of the parseKey method
console.log(lookupUser("CFFBFD8B-1326-4212-8E56-5E27750CC426" as UuidKey));
