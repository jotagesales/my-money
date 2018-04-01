import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ContendHeader from "../common/template/contentHeader"
import Content from "../common/template/content"

import Tabs from "../common/tab/tabs"
import TabsHeader from "../common/tab/tabs_header"
import TabsContent from "../common/tab/tabs_content"
import TabHeader from "../common/tab/tabheder"
import TabContent from "../common/tab/tabContent"
import List from "./billingCicleList"
import BilliCicleForm from "./billingCicleForm"

import { selectTab, showTabs } from "../common/tab/tabActions"
import { create } from "./billiCicleActions"

class BilliCicle extends Component {

    componentWillMount() {
        this.props.selectTab("tabList")
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContendHeader title="Ciclos de pagamento" subtitle="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List></List>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BilliCicleForm onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BilliCicleForm />
                            </TabContent>
                            <TabContent id="tabDelete"><h1>Deletar</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch)

export default connect(null, mapDispatchToProps)(BilliCicle)