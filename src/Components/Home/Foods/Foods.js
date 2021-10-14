import React from 'react';
import { useTabs, TabPanel,TabSelector} from 'react-headless-tabs';



const Foods = () =>
{
    const [selectedTab, setSelectedTab] = useTabs([
        'account',
        'company',
        'team',
        'billing',
      ]);
    return (
        <>
            <nav>
                <TabSelector isActive={selectedTab === 'account'} onClick={() => setSelectedTab('account')}>
                    My Account
                </TabSelector>
            </nav>

            <div>
                <TabPanel hidden={selectedTab !== 'account'}>My Account</TabPanel>
            </div>
        </>
    );
};

export default Foods;