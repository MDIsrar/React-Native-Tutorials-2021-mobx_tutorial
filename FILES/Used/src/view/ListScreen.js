import React from 'react';

import { CheeatahListText } from '../style/text';
import { Container } from '../style/container';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';
import { superheroStore } from '../store/superheroes';
import { observer } from 'mobx-react';

export default ListScreen = observer(() => {

	console.log(superheroStore.superheroes.length);

	return (
		<Container>
			<FlatList
				data={superheroStore.superheroes}
				keyExtractor={(item) => item.id}
				style={{ width: '100%', marginTop: 20, paddingBottom: 10 }}
				ItemSeparatorComponent={() => <ListSeparator />}
				renderItem={({ item }) => (
					<CheeatahListText
						content={`Name: ${item.name}`}
						onLongPress={() => superheroStore.deleteHero(item.id)}
						description={`Power: ${item.power}`}
					/>
				)}
			/>
		</Container>
	);
})