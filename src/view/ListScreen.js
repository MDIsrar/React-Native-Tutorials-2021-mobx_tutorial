import React, { useEffect, useState } from 'react';

import { CheeatahListText } from '../style/text';
import { Container } from '../style/container';
import { FlatList } from 'react-native';
import { ListSeparator } from '../style/separator';
import { superheroesStore } from '../store/superheroesStore';
import { observer } from 'mobx-react';

export default ListScreen = observer(({ route }) => {

	return (
		<Container>
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
		</Container>
	);
})
