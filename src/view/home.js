import React, { useState } from 'react';

import { CheeatahListText, Title } from '../style/text';
import { Container, RowContainer } from '../style/container';
import { CheetahInput } from '../style/input';
import { CheeatahButton } from '../style/button';
import { superheroesStore } from '../store/superheroesStore';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';
import { Observer, observer } from 'mobx-react';

export default Home = ({ navigation }) => {

	const [name, setName] = useState('');
	const [power, setPower] = useState('');

	return (
		<Container>
			<Title>Superheroes</Title>
			<CheetahInput
				hint='Name'
				onChangeText={text => setName(text)}
			/>
			<CheetahInput
				hint='Power'
				onChangeText={text => setPower(text)}
			/>
			<RowContainer>
				<CheeatahButton
					title="Add"
					onPress={() => superheroesStore.addHero({ name, power })}
					marginRight={12}
				/>
				<CheeatahButton
					title="View List"
					onPress={() => navigation.navigate('List')}
				/>
			</RowContainer>
			<Observer>
				{() =>
					<FlatList
						data={superheroesStore.superheroes}
						keyExtractor={(item) => item.id}
						style={{ width: '100%', marginTop: 20, paddingBottom: 10 }}
						ItemSeparatorComponent={() => <ListSeparator />}
						renderItem={({ item }) => (
							<CheeatahListText
								content={`Name: ${item.name}`}
								onLongPress={() => superheroesStore.deleteHero(item.id)}
								description={`Power: ${item.power}`}
							/>
						)}
					/>
				}
			</Observer>
		</Container>
	);
};