import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CompareButton } from '../../buttons/rectangularButtons/CompareButton';
import { DeleteRoundedButton, EditRoundedButton } from '../../buttons/roundedButtons/index';
import { deleteProduct } from '../../../tools/SecureStore';
import { router } from 'expo-router';

const onPressEditBtnAction = () => {
  // Jump to editPage
  router.push('/editPage');
}

const deleteSelectedProducts = (selectedProductsNameList: string[]) => {
  // delete selected products
  selectedProductsNameList.forEach((productName) => {
    deleteProduct(productName);
  })
}

export function CompareEditDelete(
  { selectedProductsNameList }: {selectedProductsNameList: string[]}
) {
  return (
    <View>
        <EditRoundedButton onPressAction={() => {
          onPressEditBtnAction();
        }} />
        <DeleteRoundedButton onPressAction={() => {
          deleteSelectedProducts(selectedProductsNameList);
        }} />
        <CompareButton onPressAction={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({})