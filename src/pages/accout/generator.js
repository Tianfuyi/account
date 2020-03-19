import React, { Component } from 'react';
import * as mock from './../../mock';
import ClipboardJS from 'clipboard';
 import  * as banks from './../../bankCheck/checkCard';
import { Icon, Button,Form, Input, message, Select, Col  } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;


class SelectInput extends Component{
  render(){
    return (<Input className="select-input" 
            prefix={<Icon type={this.props.prefix} theme="outlined" />}
            id={this.props.id} type="text" 
            value={this.props.rendomValue} 
            addonAfter={<Icon style={{cursor:'pointer'}} type='copy' data-clipboard-target={"#"+this.props.id} />}
            readOnly 
        />)
  }
  
}

class AccountGenerator extends Component {
  // constructor(props){
  //   super(props)
  // }

  state = {
    rendomName: '',
    rendomID:'',
    rendomMobile: '',
    rendomBankCard: '',
    radomCreditBankCard:'',


    adult: true,

      carBank: "招商银行",
      cardLength: 16,
      cardsBin: "621483",
      carBanks: ['招商银行', '交通银行', '建设银行','中原银行','中国银行','中国邮政储蓄银行','中信银行','中国工商银行','中国农业银行','中国光大银行','广东发展银行','中国民生银行','浦发银行','华夏银行','北京银行','上海银行','江苏银行'],
      cardLengths: [16],
      cardsBins: ['621483','622580','690755','623126'],


      c_carBank: "招商银行",
      c_cardsBin: "622575",

      c_carBanks: ['招商银行', '交通银行', '建设银行',,'中国银行','中国邮政储蓄银行','中信银行','中国工商银行','中国农业银行','中国光大银行','广东发展银行','中国民生银行','浦发银行','华夏银行','北京银行','上海银行','江苏银行'],

      c_cardsBins: [622575,622576,622581,628290,622578,479228],


  };

/*借记卡长度*/
    getcardLength(carBank) {
        var gc1 = [];
        gc1['招商银行'] = [16];
        gc1['交通银行'] = [17,19];
        gc1['建设银行'] = [19];
        gc1['中原银行'] = [16];
        gc1['中国银行'] = [19];
        gc1['中国邮政储蓄银行'] = [19];
        gc1['中信银行'] = [16];
        gc1['中国工商银行'] = [19];
        gc1['中国农业银行'] = [19];
        gc1['中国光大银行'] = [16];
        gc1['广东发展银行'] = [19];
        gc1['中国民生银行'] = [16];
        gc1['浦发银行'] = [16];
        gc1['华夏银行'] = [16];
        gc1['北京银行'] = [16];
        gc1['上海银行'] = [16];
        gc1['江苏银行'] = [19];
        return gc1[carBank]

    }
/*信用卡卡Bin*/
    getc_cardsBins(c_cardsBins) {
        var gc1 = [];
        gc1['招商银行'] = [622575,622576,622581,628290,622578,479228];
        gc1['交通银行'] = [458123,458124,622250];
        gc1['建设银行'] = [622166,621673,621284];
        gc1['中国银行'] = [514958,622752,622753,622755,524864];
        gc1['中国邮政储蓄银行'] = [622812,622810,622811,628310];
        gc1['中信银行'] = [403392,433669,376968,376969];
        gc1['中国工商银行'] = [544210,548943,370267];
        gc1['中国农业银行'] = [403361,404117,404118];
        gc1['中国光大银行'] = [356839,486497,625980];
        gc1['广东发展银行'] = [428911,436768];
        gc1['中国民生银行'] = [545392,545393,545431,545447];
        gc1['浦发银行'] = [622520];
        gc1['华夏银行'] = [622637,622636,523959,628318,528708];
        gc1['北京银行'] = [522001,622163,622853,628203];
        gc1['上海银行'] = [356827,356828];

        gc1['江苏银行'] = [625902,628210,622283];
        return gc1[c_cardsBins]

    }

/*借记卡卡Bin*/
    getcardsBin(carBank, cardLength) {
        var gc2 = [];
        gc2['招商银行'] = [];
        gc2['招商银行']['16'] = ['621483','622580','690755','623126'];

        gc2['交通银行'] = [];
        gc2['交通银行']['17'] = ['601428','621162','622259','622261','622260'];
        gc2['交通银行']['19'] = ['622260','622261'];

        gc2['建设银行'] = [];
        gc2['建设银行']['19'] = ['620060','434061','434062','524094','589970','421349','621080','621081'];

        gc2['中原银行'] = [];
        gc2['中原银行']['16'] = ['623138','623505','621221','623660','621601','621327','621748','621235'];


        gc2['中国银行'] = [];
        gc2['中国银行']['19'] = ['621660','621661','621663','621666','621667','621668','601382','621256'];

        gc2['中国邮政储蓄银行'] = [];
        gc2['中国邮政储蓄银行']['19'] = ['622150','622181','622188','955100','621095','620062','621798','621799'];

        gc2['中信银行'] = [];
        gc2['中信银行']['16'] = ['433670','403392','433669','376968','376969','400360','403391','376966','404158'];

        gc2['中国工商银行'] = [];
        gc2['中国工商银行']['19'] = ['622202','620302','620602'];

        gc2['中国农业银行'] = [];
        gc2['中国农业银行']['19'] = ['623206','620059','621336','622821','622824','622825','622827','622840'];

        gc2['中国光大银行'] = [];
        gc2['中国光大银行']['16'] = ['621489','623159'];

        gc2['广东发展银行'] = [];
        gc2['广东发展银行']['19'] = ['623506','622568'];
        gc2['中国民生银行'] = [];
        gc2['中国民生银行']['16'] = ['415599'];
        gc2['浦发银行'] = [];
        gc2['浦发银行']['16'] = ['622516'];
        gc2['华夏银行'] = [];
        gc2['华夏银行']['16'] = ['622631','622632','622633'];

        gc2['北京银行'] = [];
        gc2['北京银行']['16'] = ['602969','422161','623111'];
        gc2['上海银行'] = [];
        gc2['上海银行']['16'] = ['438600'];

        gc2['江苏银行'] = [];
        gc2['江苏银行']['19'] = ['621076'];
        return gc2[carBank][cardLength]

    }

/*借记卡 三级联动*/
    handleChange(name, e) {
    //    e.preventDefault()

        switch (name) {
            case "carBank":
                this.setState({
                    carBank: e,
                    cardLengths: this.getcardLength(e),
                    cardLength:this.getcardLength(e)[0],
                    cardsBins:this.getcardsBin(e, this.getcardLength(e)[0]),
                    cardsBin:this.getcardsBin(e, this.getcardLength(e)[0])[0]
                });

                break;

            case "cardLength":
                this.setState({
                    cardLength: e,
                    cardsBins: this.getcardsBin(this.state.carBank, e),
                    cardsBin:this.getcardsBin(this.state.carBank, e)[0]
                });

                break;

            case "cardsBin":
                this.setState({
                    cardsBin: e
                });
                break;
            default:
                alert("child handleChange error")

        }

    }
/*信用卡二级联动*/
    handlec_Change(name, e) {
        //    e.preventDefault()

        switch (name) {
            case "c_carBank":
                this.setState({
                    c_carBank: e,
                    c_cardsBins: this.getc_cardsBins(e),
                    c_cardsBin:this.getc_cardsBins(e)[0],

                });

                break;

            case "c_cardsBin":
                this.setState({
                 //   c_cardsBins: this.getc_cardsBins(e),
                    c_cardsBin: e,
                    // c_cardsBins: this.getc_cardLength(this.state.c_carBank, e),

                });

                break;


            default:
                alert("child handleChange error")

        }

    }
    /*复制*/
  componentDidMount(){
    this.initRendomData()
    let clipboard = new ClipboardJS("[data-clipboard-target],[data-clipboard-text]")
    clipboard.on('success', function(e) {

        message.info('复制成功');
        e.clearSelection();
    });
  }
  /**
   * 获取用户全部信息
   */
  generateDataAll= ()=>{
    let data = {
      rendomName: this.state.rendomName,
      rendomID: this.state.rendomID,
      rendomMobile: this.state.rendomMobile,
      rendomBankCard: this.state.rendomBankCard,
        radomCreditBankCard: this.state.radomCreditBankCard
    } 
    return data;
  }

  /**
   * 伸展菜单
   *
   * @memberof App
   */
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  /**
  * 更改生成信息成年人/未成年
  * 
  */
  changeAdult = async ()=>{
    await this.setState({
      adult: !this.state.adult
    })
    this.initRendomData()
  }

  /**
   * 生成虚拟数据
   *  rendomName 姓名
   *  rendomID   身份证
   * 
   * @memberof App
   */
  initRendomData = ()=>{
    this.setState({
      rendomName: mock.rendomName(),
      rendomID: mock.rendomID(this.state.adult),
      rendomMobile: mock.rendomMobile(),
      rendomBankCard: mock.rendomBankCard(this.state.cardsBin,this.state.cardLength),
        radomCreditBankCard:mock.rendomCreditBankCard(this.state.c_cardsBin),


    })
  }
    createRendomData = ()=>{
        this.setState({
            rendomName: mock.rendomName(),
            rendomID: mock.rendomID(this.state.adult),
            rendomMobile: mock.rendomMobile(),
            rendomBankCard: mock.rendomBankCard(this.state.cardsBin,this.state.cardLength),
            radomCreditBankCard:mock.rendomCreditBankCard(this.state.c_cardsBin),


        })

    }
     luhnCheck(bankno){
         if (bankno.length < 16 || bankno.length > 19) {
             document.getElementById("box_1").innerHTML="银行卡号长度必须在16到19之间";

             return false;
         }
         var num = /^\d*$/;  //全数字
         if (!num.exec(bankno)) {
//$("#banknoInfo").html("银行卡号必须全为数字");

             document.getElementById("box_1").innerHTML="行卡号必须全为数字";
             return false;
         }
//开头6位
         var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
         if (strBin.indexOf(bankno.substring(0, 2))== -1) {
//$("#banknoInfo").html("银行卡号开头6位不符合规范");
             document.getElementById("box_1").innerHTML="银行卡号开头6位不符合规范";
             return false;
         }
         var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）

         var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
         var newArr=new Array();
         for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
             newArr.push(first15Num.substr(i,1));
         }
         var arrJiShu=new Array();  //奇数位*2的积 <9
         var arrJiShu2=new Array(); //奇数位*2的积 >9

         var arrOuShu=new Array();  //偶数位数组
         for(var j=0;j<newArr.length;j++){
             if((j+1)%2==1){//奇数位
                 if(parseInt(newArr[j])*2<9)
                     arrJiShu.push(parseInt(newArr[j])*2);
                 else
                     arrJiShu2.push(parseInt(newArr[j])*2);
             }
             else //偶数位
                 arrOuShu.push(newArr[j]);
         }

         var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
         var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
         for(var h=0;h<arrJiShu2.length;h++){
             jishu_child1.push(parseInt(arrJiShu2[h])%10);
             jishu_child2.push(parseInt(arrJiShu2[h])/10);
         }

         var sumJiShu=0; //奇数位*2 < 9 的数组之和
         var sumOuShu=0; //偶数位数组之和
         var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
         var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
         var sumTotal=0;
         for(var m=0;m<arrJiShu.length;m++){
             sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
         }

         for(var n=0;n<arrOuShu.length;n++){
             sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
         }

         for(var p=0;p<jishu_child1.length;p++){
             sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
             sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
         }
         //计算总和
         sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

         //计算Luhm值
         var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
         var luhm= 10-k;

         if(lastNum==luhm){

             return true;
         }
         else{

             document.getElementById("box_1").innerHTML="卡号不符合银行卡规范";
             return false;
         }
     }
    search(){

        const inpVal = this.input.value;



        // alert("xxxxxxxxxxxxxxxxxxxxxx"+JSONstr1);
       if(this.luhnCheck(inpVal)) {
           var JSONstr1 = JSON.stringify(banks.bankCardAttribution(inpVal));
           document.getElementById("box_1").innerHTML = JSONstr1;

       }

    }



  render() {
      let id = 0
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 16,
        },
      },
    };

    return (



      <div className="App">


        <FormItem inline  {...tailFormItemLayout}>

            <Button type="primary" htmlType="button" style={{ marginLeft: 8 }} onClick={this.createRendomData}>生成</Button>
          <Button type="primary" htmlType="button"  style={{ marginLeft: 8 }} onClick={this.initRendomData}>重新生成</Button>

          <Button type="primary" htmlType="button" style={{ marginLeft: 8 }} data-clipboard-text={Object.values(this.generateDataAll()).join(',')}>复制全部</Button>
        </FormItem>
        <Form>
          <FormItem {...formItemLayout} label="姓名">
            <SelectInput id="realName" prefix="user" rendomValue={this.state.rendomName} ></SelectInput>
          </FormItem>
          <FormItem {...formItemLayout} label="身份证号">
            <Col span="6">
              <Select defaultValue={1} onChange={this.changeAdult} style={{marginRight:10}}>
                <Option value={1}>成年人</Option>
                <Option value={0}>未成年</Option>
              </Select>
            </Col>
            <Col span="18"><SelectInput id="idCard" prefix="idcard" rendomValue={this.state.rendomID}></SelectInput></Col>
            
          </FormItem>
          <FormItem {...formItemLayout} label="手机号">
            <SelectInput id="mobileNumber" prefix="mobile" rendomValue={this.state.rendomMobile}></SelectInput>
          </FormItem>

          <FormItem {...formItemLayout} label="银行借记卡号">
            <Col span="6">
                <Select className="select"  value={this.state.carBank}   onChange={this.handleChange.bind(this, "carBank")}  style={{marginRight:10}}>

                    {this.state.carBanks.map(carBank => (
                        <option value={carBank} key={id++}>{carBank}</option>

                    ))}
                </Select>

            </Col>
              <Col span="6">

                  <Select className="select"  value={this.state.cardLength}     onChange={this.handleChange.bind(this, "cardLength")}  style={{marginRight:10}}>

                      {this.state.cardLengths.map(cardLength => (
                          <option value={cardLength} key={id++}>{cardLength}</option>
                      ))}

                  </Select>
              </Col>
              <Col span="6">

                  <Select className="select"  value ={this.state.cardsBin} onChange={this.handleChange.bind(this, "cardsBin")}  style={{marginRight:10}}>

                      {this.state.cardsBins.map(cardsBin => (

                          <option value={cardsBin} key={id++}>{cardsBin}</option>

                      ))}

                  </Select>
              </Col>
            <Col span="18">
              <SelectInput id="bankCard" prefix="credit-card" rendomValue={this.state.rendomBankCard}></SelectInput>

            </Col>
            
          </FormItem>
            <FormItem {...formItemLayout} label="银行卡贷记卡号">

                <Col span="9">
                    <Select className="select"  value={this.state.c_carBank}   onChange={this.handlec_Change.bind(this, "c_carBank")}  style={{marginRight:10}}>

                        {this.state.c_carBanks.map(c_carBank => (
                            <option value={c_carBank} key={id++}>{c_carBank}</option>

                        ))}
                    </Select>

                </Col>
                <Col span="9">

                    <Select className="select"  value={this.state.c_cardsBin}     onChange={this.handlec_Change.bind(this, "c_cardsBin")}  style={{marginRight:10}}>

                        {this.state.c_cardsBins.map(c_cardsBin => (
                            <option value={c_cardsBin} key={id++}>{c_cardsBin}</option>
                        ))}

                    </Select>
                </Col>


                <Col span="18">
                    <SelectInput id="creditbankCard" prefix="credit-card" rendomValue={this.state.radomCreditBankCard}></SelectInput>

                </Col>

            </FormItem>

            <FormItem {...formItemLayout} label="银行卡信息验证">
                <div>
                    <input type="text" ref={input => this.input = input} defaultValue=""/>
                    <button onClick={this.search.bind(this)}>查询</button>
                </div>

                <h1> <span id="box_1"></span></h1>

            </FormItem>



        </Form>
      </div>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create()(AccountGenerator);
export default WrappedHorizontalLoginForm;
