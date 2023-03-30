let opcoes = ""
const imoveis = []

do{

  opcoes = prompt(
    "Cadastro de Imóveis" + 
    "\nImóveis Cadastrados: " + imoveis.length +
    "\n\nEscolha uma opção:" + 
    "\n1.Cadastrar Imóvel" + 
    "\n2.Exibir Imóveis Cadastrados" +
    "\n3. Sair"
  )

  switch(opcoes){
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Insira o nome do Proprietário:")
      imovel.quartos = prompt("Quantidade de quartos:")
      imovel.banheiros = prompt("Quantidade de banheiros:")
      imovel.garagem = prompt("Possui garagem? (Sim/Não)")

      const confirma = confirm(
        "Salvar esse imóvel?\n" +
        "\nNome do Proprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem 
      )

      if(confirma){
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      }else{
        alert("Voltando ao menu")
      }
      break

    case "2":
      for(let i = 0; i < imoveis.length; i++){
        alert(
          "Imóvel: " + (i + 1) +
          "\n\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiro: " + imoveis[i].banheiros +
          "\nGaragem: " + imoveis[i].garagem 
        )
      }
      break

    case "3":
      alert("Encerrando...")
      break

    default:
      alert("Opção Inválida")

  }

}while(opcoes !== "3")