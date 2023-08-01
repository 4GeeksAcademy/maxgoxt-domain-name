let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let xtends = [".com", ".net", ".us", ".io"];
let doms = [];
let links = [];

function gen_doms() {
  for (let pronounS = 0; pronounS < pronoun.length; pronounS++) {
    for (let adjS = 0; adjS < adj.length; adjS++) {
      for (let nounS = 0; nounS < noun.length; nounS++) {
        let dom = pronoun[pronounS] + adj[adjS] + noun[nounS];
        doms.push(dom);
        // console.log(dom);
        // return dom;
      }
    }
  }
}

function add_extend() {
  for (let dom = 0; dom < doms.length; dom++) {
    for (let extend = 0; extend < xtends.length; extend++) {
      let link = "https://" + doms[dom] + xtends[extend];
      links.push(link);
    }
  }
}

gen_doms();
add_extend();
console.log(links);
