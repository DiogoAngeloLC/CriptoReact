import Accordion from "../../../components/Accordion";
import Button from "../../../components/Button";
import "./style.scss";

const FormPerguntasFrequentes = () => {

  return (
    <div className="align-modal">
      <Accordion
        title="Quanto de carbono tem cada token?"
        content="0,2 até 0,8. Depende da avaliação que está sendo realizada."
      />
      <Accordion
        title="Posso compensar o carbono de cada token? Como?"
        content="Sim. Você pode compensar na data presente o potencial de absorção de uma árvore dentro da nossa plataforma."
      />
      <Accordion
        title="Posso revender o carbono de cada token?"
        content="Você tem a opção de vender fracionado com a quantidade já absorvida no momento presente ou vender a opção de compra futura, o que pode ser negociado com o comprador em nossa plataforma."
      />
      <Accordion
        title="Posso utilizar o token para me certificar como ESG?"
        content="Sim. O token é auditado financeiramente, juridicamente e ambientalmente. Portanto, você pode utilizar o token como um certificado de compensação de carbono a fim de se certificar como referência em ESG."
      />
      <Accordion
        title="Como posso lucrar com o token?"
        content="O próprio token é uma reserva de valor e, dependendo da demanda do mercado em ativos sustentáveis, você pode revendê-lo em um mercado secundário por um valor superior ao que foi adquirido. 

      Além disso, você pode realizar a venda do crédito de carbono com ou sem o token, dependendo do valor que for negociado. Vale frisar que o valor do carbono está em alta constante e tende a subir conforme a urgência climática se intensifica."
      />
      <Accordion
        title="Qual é a distribuição do dinheiro quando realizo o investimento?"
        content="0,2 até 0,8. Depende da avaliação que está sendo realizada."
      />
      <Accordion
        title="Quanto de carbono tem cada token?"
        content="30% vai para o plantio realizado com sucesso (20% para o dono da terra e 10% para os plantadores).
      40% vai para a manutenção e crescimento da floresta (25% para o dono da fazenda e 15% para a empresa responsável pelo correto crescimento e geração de relatórios com uso da tecnologia).
      30% é a margem bruta para a Abundance Brasil."
      />
      <Accordion
        title="Quais indicadores são utilizados para monitorar o crescimento das árvores?"
        content="Semestralmente e anualmente indicamos como está o crescimento das árvores.
      Atualização sobre a quantidade de carbono sequestrada e as projeções mais realistas.   
      Além disso, também relatamos sobre a biodiversidade presente: novos animais e novas espécies nativas.     
      Relatos sobre o ecoturismo local.
      Atualização em tempo real do valor do crédito de carbono.
      Atualização em tempo real do valor do seu token no mercado secundário.
      Atualização em tempo real do valor do Abundance Coin no mercado secundário."
      />
      <Accordion
        title="Quais indicadores são utilizados para monitorar o impacto social causado?"
        content="Quantidade de pessoas da comunidade local que estão sendo beneficiadas com a floresta.
      Benfeitorias realizadas derivadas da floresta."
      />
      <Accordion
        title="Como faço para vender os meus Abundance tokens?        "
        content="Você pode vendê-lo no Ecossistema ESG dentro da plataforma da Abundance. Nesse link você pode checar maiores detalhes: xxxx.abundancebrasil.com/vendatoken"
      />
      <Accordion
        title="Como faço para gerar os meus Abundance Coins?"
        content="Todos os dias, às 00:01 de Brasília, é gerado a mesma quantidade de Abundance Coins do que a que você possui em Abundance Tokens. Mas, mensalmente, é necessário que você clique no botão: “Estou contribuindo com um mundo mais sustentável e abundante” para que você consiga resgatar os Abundance Coins relativos ao impacto que o seu ativo está gerando.
        Assim que você clicar no botão, os Coins vão diretamente para sua carteira digital "
      />
      <Accordion
        title="Como faço para vender os meus Abundance Coins?"
        content="Você pode vendê-lo no mercado secundário, você encontra o link dentro da plataforma da Abundance. Além disso, você pode enviar os Abundance Coins para qualquer outra exchange que ele esteja listado ou carteira que desejar.
        Nesse link você pode checar maiores detalhes: xxxx.abundancebrasil.com/vendaabundancecoins"
      />
      <Accordion
        title="Posso converter meus criptoativos da Abundance em outros?"
        content="Sim, assim que você enviar para a sua exchange de preferência você pode usar a função de conversão e converter para qualquer outro criptoativo do seu interesse."
      />
      <Accordion
        title="Onde posso utilizar os criptoativos da Abundance?"
        content="O Ecossistema ESG da Abundance está expandindo cada vez mais e parceiros que possuam soluções sustentáveis e alinhadas com a Economia Verde serão convidados a aceitar os Abundance Coins no preço de seus produtos. Dessa forma, conforme o ecossistema sustentável cresça em nossa sociedade, o Abundance Coin irá se valorizar à medida que ele também seja uma moeda de troca dessa nova Economia.
        Além disso, com as parcerias que estão sendo formadas, haverá uma liquidez imediata para esse criptoativo no mercado secundário. Portanto, você poderá sacar assim que tiver o ativo em sua carteira digital.
        Ainda, você também pode enviar para as exchanges de sua preferência que tenham o ativo listado e convertê-lo ou vendê-lo na plataforma que você tiver escolhido."
      />
    </div>
  );
};

export default FormPerguntasFrequentes;
