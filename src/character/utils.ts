export const formatModifier = (modifier: number): string => {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

export const parseNumber = (value: string): number | undefined => {
  try {
    if (value === "") value = "+0";
    else if (value === "+") value = "+0";
    // else if (value === "-") value = "-0"; //doesn't work 

    return parseInt(value)
  }
  catch (e) {
    return undefined;
  }
}

export const download = (data: string, fileName: string) => {
  const a = document.createElement('a');
  const blob = new Blob([data], { 'type': "text/plain" });
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}