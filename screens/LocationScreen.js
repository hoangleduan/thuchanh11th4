import React, { useMemo, useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ZONE_OPTIONS = ["Banasree", "Gulshan", "Dhanmondi"];

const AREA_OPTIONS = {
  Banasree: ["Block A", "Block B", "Block C"],
  Gulshan: ["Gulshan 1", "Gulshan 2", "Niketan"],
  Dhanmondi: ["Road 8", "Road 15", "Shimanto"],
};

function SelectRow({
  label,
  value,
  placeholder,
  options,
  isOpen,
  onToggle,
  onSelect,
}) {
  return (
    <View style={styles.selectBlock}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.selectRow}
        onPress={onToggle}
      >
        <Text style={[styles.selectValue, !value && styles.selectPlaceholder]}>
          {value || placeholder}
        </Text>
        <View style={styles.chevronSlot} />
      </TouchableOpacity>

      {isOpen ? (
        <View style={styles.optionsList}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionItem}
              activeOpacity={0.8}
              onPress={() => onSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export default function LocationScreen({ navigation }) {
  const [selectedZone, setSelectedZone] = useState("Banasree");
  const [selectedArea, setSelectedArea] = useState("");
  const [openSelect, setOpenSelect] = useState(null);

  const areaOptions = useMemo(
    () => AREA_OPTIONS[selectedZone] || [],
    [selectedZone]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={[styles.glow, styles.glowTopLeft]} />
        <View style={[styles.glow, styles.glowTopRight]} />
        <View style={[styles.glow, styles.glowBottom]} />

        <View style={styles.content}>
          <Image
            source={require("../assets/illustration.png")}
            style={styles.illustration}
          />

          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>
            Switch on your location to stay in tune with what&apos;s happening in
            your area
          </Text>

          <View style={styles.form}>
            <SelectRow
              label="Your Zone"
              value={selectedZone}
              options={ZONE_OPTIONS}
              isOpen={openSelect === "zone"}
              onToggle={() =>
                setOpenSelect((current) =>
                  current === "zone" ? null : "zone"
                )
              }
              onSelect={(option) => {
                setSelectedZone(option);
                setSelectedArea("");
                setOpenSelect(null);
              }}
            />
            <SelectRow
              label="Your Area"
              value={selectedArea}
              placeholder="Types of your area"
              options={areaOptions}
              isOpen={openSelect === "area"}
              onToggle={() =>
                setOpenSelect((current) =>
                  current === "area" ? null : "area"
                )
              }
              onSelect={(option) => {
                setSelectedArea(option);
                setOpenSelect(null);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.primaryButton}
          activeOpacity={0.9}
        >
          <Text style={styles.primaryButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBF7",
    paddingHorizontal: 22,
    paddingTop: 54,
    paddingBottom: 34,
  },
  glow: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.55,
  },
  glowTopLeft: {
    width: 220,
    height: 220,
    top: 0,
    left: 40,
    backgroundColor: "#F7E7D9",
  },
  glowTopRight: {
    width: 190,
    height: 190,
    top: 18,
    right: -24,
    backgroundColor: "#F8DAD8",
  },
  glowBottom: {
    width: 220,
    height: 220,
    bottom: -42,
    left: 44,
    backgroundColor: "#ECE6F8",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  illustration: {
    width: 188,
    height: 188,
    resizeMode: "contain",
    marginTop: 18,
  },
  title: {
    marginTop: 14,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 22,
    color: "#7C7C7C",
    textAlign: "center",
    paddingHorizontal: 12,
  },
  form: {
    width: "100%",
    marginTop: 56,
  },
  selectBlock: {
    marginBottom: 26,
  },
  fieldLabel: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 12,
  },
  selectRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  chevronSlot: {
    width: 20,
    height: 20,
  },
  selectValue: {
    fontSize: 16,
    color: "#181725",
  },
  selectPlaceholder: {
    color: "#B1B1B1",
  },
  optionsList: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  optionItem: {
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },
  optionText: {
    fontSize: 15,
    color: "#181725",
  },
  primaryButton: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    minHeight: 66,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
