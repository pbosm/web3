    window.userWalletAddress= null
    const web3 = new Web3(Web3.givenProvider);
    const buttonConnect = document.getElementById('buttonConnect')
    const buttonTrade = document.getElementById('buttonTrade')
    const buttonTransf = document.getElementById('buttonTransf')
    const buttonNFTS = document.getElementById('buttonNFTS')
    const buttonShowTransf = document.getElementById('buttonShowTransf')
    const buttonValor = document.getElementById('buttonValor')
    const selectTrade = document.getElementById('selectTrade')
    const exitUser = document.getElementById('exitUser')
    const network  = document.getElementById('network')
    const prince  = document.getElementById('prince')
    const token  = document.getElementById('token')
    const table = document.getElementById('table')
    const keyMoralis = '3pHxinlv2qyxrMNXrq6RQEpW7iepydijoDwvZL1PGOOXbz6QsNhS0Bp9UIDsKrWG';
    var contractABIBCOIN = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PancakePair","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeRouter","outputs":[{"internalType":"contract IPancakeRouter02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PreSale","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PrivateSale","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateFeesOnTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deactivateFeesOnTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setOperationsVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"preSale","type":"address"}],"name":"setPreSaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"privateSale","type":"address"}],"name":"setPrivateSaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setRewardsVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setRouterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"setSwapThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

    function dateToBr(dateTimeString) {  //Converter para data
      if(dateTimeString.length == 10) {
          const [date]            = dateTimeString.split(' ');
          const [YYYY, MM, DD]    = date.split('-');
  
          return `${DD}/${MM}/${YYYY}`;
      } else {
          const [date, time]      = dateTimeString.split(' ');
          const [YYYY, MM, DD]    = date.split('-');
  
          return `${DD}/${MM}/${YYYY} ${time}`;
      }
    }

    function toggleButton() {  
      if (!window.ethereum) {  //verificando se o metamask não está instalado
        buttonConnect.innerText = 'MetaMask não está instalado'
        buttonConnect.classList.remove
        buttonConnect.classList.add
        return false
      }

      buttonConnect.addEventListener('click', loginWithMetaMask)
    }

    async function tradeOption() { //Verificação para trocar de rede na metamask
      let params = [];

      let option = $('#selectTrade').val();

      if(option == 'bnb') {
        params =  [{
          "chainId": "0x38", // 56 in decimal
          "chainName": "Smart Chain",
          "rpcUrls": [
              "https://bsc-dataseed.binance.org"
          ],
          "nativeCurrency": {
              "name": "Binance Coin",
              "symbol": "BNB",
              "decimals": 18
          },
          "blockExplorerUrls": [
              "https://bscscan.com"
          ]
        }]
      } else if (option == 'avl') {
        params =  [{
          "chainId": "0xa86a", 
          "chainName": "Avalanche",
          "rpcUrls": [
              "https://rpc.ankr.com/avalanche"
          ],
          "nativeCurrency": {
              "name": "Avalanche",
              "symbol": "MATIC",
              "decimals": 18
          },
          "blockExplorerUrls": [
              "https://snowtrace.io"
          ]
        }]
       } else {
        params = [{
          "chainId": "0x89", 
          "chainName": "Polygon Chain",
          "rpcUrls": [
              "https://polygon-rpc.com/"
          ],
          "nativeCurrency": {
              "name": "Polygon Coin",
              "symbol": "MATIC",
              "decimals": 18
          },
          "blockExplorerUrls": [
              "https://polygonscan.com/"
          ]
        }]
      }
      try {
        if(option == 'eth'){
          ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
              'chainId': "0x1"
            }]
          });
        } else {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params,
          })
        }
      } catch (error) {
          // something failed, e.g., user denied request
      }

      $('.showValor, .showConta, #buttonTransf').hide()
      $('#buttonValor').show();

    }

    async function showHistorci(verify = false) { //Mostrar o historico de transações do usuário e paginação tudo atráves do moralis Url
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': 'test'}};
      let idCursor = (verify) ? $('.btn-more').attr('data-cursor') : '';

      $('.sem-nfts').hide();

      let response = await fetch('https://deep-index.moralis.io/api/v2/'+ accounts[0] +'?chain='+ chainId + `&cursor=${idCursor}&limit=10`, options).then(function(response) {
        return response.json();
      })
        // .then(response => console.log(response))
        .catch(err => console.error(err));
        //console.log(response)

      if(response.cursor) $('.btn-more').attr('data-cursor', response.cursor);
      if(response.page == 0) $('.historico tbody').empty();

      if(response.total == 0) {
          $('.historico, .more').hide();
          $('.sem-historico').show();
      } else {
          for(let prop in response.result) {
          let item = response.result[prop]
          if(item) {
            //console.log(item)
            $('.table tbody').append(`<tr></tr><tr></tr><tr><th>${item.hash}</th><th>${item.from_address}</th><th>${item.to_address}</th><th>${item.value}</th><th>${dateToBr(item.block_timestamp.substring(0, 16).replace('T', ' '))}</th><th>${item.gas}</th></tr>`)
            $('.historico, .more').show();
            $('.historico').css('display', 'block');
          }
        } 
        $('.btn-more').show();
      }
      if(response.page > 0 && !response.cursor) $('.btn-more').hide();
    }

    async function sendTransaction(){ //Transferir MOEDA para outra conta 
      $('.showConta, .showValor').show();
      $('.sem-historico, .sem-nfts').hide();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      let valueTrans = $('#value').val();

      const weiValue = web3.utils.toWei(valueTrans, 'ether'); 

      let params = [{
        from: accounts[0],
        to: $('#account').val(),
        gas: Number(21000).toString(16),
        gasPrince: Number(2500000).toString(16),
        value: Number((weiValue)).toString(16),
      }]
      
      let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        if (err.code === 4001){

        } 
        //checkTransaction().then(err => alert(err));
      })
    }

    async function sendTransactionToken(){ //Transferir TOKEN para outra conta
      $('.showConta, .showValor').show();
      $('.sem-historico, .sem-nfts').hide();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let valueTrans = $('#value').val(); //pegando o valor 

      const weiValue = web3.utils.toWei(valueTrans, 'ether');  //conversão para wei

      let fromAddress = accounts[0];
      let toAddress = $('#account').val() //pra onde
      let amount = (weiValue).toString(16)
      let contractAddress = "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D"; // BCOIN Contract
      let contractABI = contractABIBCOIN;
      let contract = new web3.eth.Contract(contractABI, contractAddress, {
           from: fromAddress
       });
       let transferBCOIN =  web3.utils.fromWei(await contract.methods.transfer(toAddress, amount).send());
    }

    async function NFTS(){ //Mostrar NFTS que o usuário temz
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': 'test'}};

    let response = await fetch('https://deep-index.moralis.io/api/v2/'+ accounts[0] +'/nft?chain='+ chainId, options).then(function(response) {
        return response.json();
      })
      .catch(err => console.error(err));
      if(response.total == 0) {
        $('.historico, .btn-more, .sem-historico, .showConta, .showValor').hide();
        $('.sem-nfts').show();
      } else {
        response.result.forEach(element => {
          let metadata = element.metadata;
          if(metadata) {
            let image = JSON.parse(metadata).image;
            if(image){
              $('.nfts-image').append(`<div class="col-3 mt-2 pr-0"><img class="img-nft" src="${image}" style="width: 100%; margin:0;"></div>`)
            }
          }
        });
      }
      //console.log(response)
    }

    async function loginWithMetaMask() {  //se conectando com o metamask e saida do hash e da rede
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
          console.error(e.message)
          return
        })
      if (!accounts) { return }

      let option = $('#selectTrade').val();
      const chainId = await ethereum.request({ method: 'eth_chainId' });  //necessário para descobrir a rede
      //console.log(chainId) 

      if(chainId == '0x1') {   //manualmente definindo qual é a rede atráves do chaid, defini 5 resultados, eth, bin, poly, ava
        network.innerText = 'Rede do usuário: Ethereum'
      } else if (chainId == '0x38') {
        network.innerText = 'Rede do usuário: Binance'
      } else if (chainId == '0x89') {
        network.innerText = 'Rede do usuário: Polygon'
      } else if (chainId == '0xa86a') {
        network.innerText = 'Rede do usuário: Avalhance'
      } else if (chainId == '0x3') {
        network.innerText = 'Rede do usuário: Rede testes Ropsten'
      } else {
        network.innerText = 'Rede não disponível'
      } 

      const getBalance =  await web3.eth.getBalance(accounts[0]) //Saldo da carteira
      let balance = (web3.utils.fromWei(getBalance))

      if(option == 'bnb') { //Contrato BombCrypto

        let fromAddress = accounts[0];
        let contractAddress = "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D"; // BCOIN Contract
        let contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PancakePair","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeRouter","outputs":[{"internalType":"contract IPancakeRouter02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PreSale","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PrivateSale","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateFeesOnTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deactivateFeesOnTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setOperationsVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"preSale","type":"address"}],"name":"setPreSaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"privateSale","type":"address"}],"name":"setPrivateSaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setRewardsVaultAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setRouterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"setSwapThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
        let contract = new web3.eth.Contract(contractABI, contractAddress, {
          from: fromAddress
        });

        let balanceToken = web3.utils.fromWei(await contract.methods.balanceOf(accounts[0]).call());
        token.innerText = "Token: " + balanceToken;
        $('#token').show();
      } else {
        $('#token').hide();
      }

      window.userWalletAddress = accounts[0]
      exitUser.innerText = "Hash do usuário: " + window.userWalletAddress
      prince.innerText = "Carteira: " + balance
      buttonConnect.innerText = 'Sair do MetaMask'
    
      $('#buttonValor, #buttonTrade, #selectTrade, #buttonNFTS, #buttonShowTransf').show(); //Mostrar os botões quando logado
  
      buttonConnect.removeEventListener('click', loginWithMetaMask) 
      setTimeout(() => {
      buttonConnect.addEventListener('click', signOutOfMetaMask) 
      }, 200)

      $('#buttonValor').click(function(){
        $('.showConta, .showValor, #buttonTransf').show();
        $('#buttonValor').hide();
      }) 
      
    }

    // function checkTransaction() { //Checando transação
      
    //   let checkTransactionLopp = () => {
    //     return ethereum.request({method: "eth_getTransactionReceipt", params}).catch((err)=>{
    //       if (err != null) return 'Transação concluída!';
    //       else return checkTransactionLopp();
    //     });
    //   };
    //     return checkTransactionLopp();
    // }

      ethereum.on('accountsChanged', function (accounts) {  //Recarregar página caso mude a network
        loginWithMetaMask();
      })

      ethereum.on('chainChanged', function (accounts) {   //Recarregar página caso mude a network
        loginWithMetaMask();
      })

    
    function signOutOfMetaMask() { //function deslogar || limpar pagina quando usuário deslogar
      window.userWalletAddress = null
      network.innerText =  ''
      exitUser.innerText = ''
      prince.innerText = ''
      $('#buttonTransf, #buttonTrade, #selectTrade, #token, #buttonValor, .showConta, .showValor, #buttonNFTS, #buttonShowTransf, #table, .sem-nfts, .sem-historico, .btn-more').hide();
      buttonConnect.innerText = 'Conectar MetaMask!'

      buttonConnect.removeEventListener('click', signOutOfMetaMask)
      setTimeout(() => {
      buttonConnect.addEventListener('click', loginWithMetaMask)
      }, 200)

    }

    window.addEventListener('DOMContentLoaded', () => {
      toggleButton()
    });
