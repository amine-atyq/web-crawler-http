const {crawlPage} = require('./crawl.js')

function main() {
  //first arg is the interpreter (node)
  //second is the entry point file
  //third is the one that we are actually passing
  if(process.argv.length < 3){
    console.log("no website provided")
    process.exit(1)
  }
  if(process.argv.length > 3){
    console.log("too many command line args")
    process.exit(1)
  }

  const baseURL =  process.argv[2]
  crawlPage(baseURL)


  console.log(`starting crawl of ${baseURL}`)
}


main()