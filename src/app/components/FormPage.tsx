"use client";

import { useMemo, type ReactNode } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { ChevronLeft, Check } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { getFormTemplate } from '../forms/formTemplates';
import { getOptions } from '../forms/formOptions';

interface FormPageProps {
  formId: string;
  onBack: () => void;
}

interface RepeatableFieldGroupProps {
  field: any;
  form: ReturnType<typeof useForm>;
  createEmptyGroupItem: (fields: any[]) => Record<string, any>;
  renderFieldInput: (field: any, controllerField: any) => ReactNode;
}

function RepeatableFieldGroup({ field, form, createEmptyGroupItem, renderFieldInput }: RepeatableFieldGroupProps) {
  const { fields: items, append, remove } = useFieldArray({
    control: form.control,
    name: field.name,
  });

  const gridCols = field.columns ?? 2;
  const gridColsClass = gridCols === 1 ? 'md:grid-cols-1' : gridCols === 2 ? 'md:grid-cols-2' : gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';
  const itemLabel = field.itemLabel ?? field.label ?? 'Item';

  return (
    <div key={field.name} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{field.sectionTitle ?? field.label}</h2>
          {field.description && <p className="text-sm text-gray-500">{field.description}</p>}
        </div>
        <button
          type="button"
          onClick={() => append(createEmptyGroupItem(field.fields ?? []))}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add {itemLabel}
        </button>
      </div>

      <div className="space-y-4 mt-4">
        {items.map((item, index) => (
          <div key={item.id} className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold text-gray-900">{itemLabel} {index + 1}</p>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>

            <div className={`grid gap-4 ${gridColsClass} mt-4`}>
              {field.fields?.map((subField: any) => (
                <FormField
                  key={`${field.name}-${index}-${subField.name}`}
                  control={form.control}
                  name={`${field.name}.${index}.${subField.name}`}
                  rules={{
                    required: subField.required ? `${subField.label} is required.` : false,
                  }}
                  render={({ field: controllerField }) => (
                    <FormItem>
                      <FormLabel>{subField.label}</FormLabel>
                      <FormControl>
                        {renderFieldInput(subField, controllerField)}
                      </FormControl>
                      {subField.description && <FormDescription>{subField.description}</FormDescription>}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FormPage({ formId, onBack }: FormPageProps) {
  const schema = getFormTemplate(formId);

  const createEmptyGroupItem = (fields: any[]) =>
    fields.reduce<Record<string, any>>((acc, subField) => {
      acc[subField.name] = subField.defaultValue ?? (subField.type === 'checkbox' ? false : '');
      return acc;
    }, {});

  const defaultValues = useMemo(() => {
    if (!schema) return {};

    return schema.fields.reduce<Record<string, any>>((acc, field) => {
      if (field.type === 'group') {
        if (field.repeatable) {
          const count = field.minItems ?? 1;
          acc[field.name] = Array.from({ length: count }, () =>
            createEmptyGroupItem(field.fields ?? []),
          );
        } else {
          acc[field.name] = createEmptyGroupItem(field.fields ?? []);
        }
      } else {
        acc[field.name] = field.defaultValue ?? (field.type === 'checkbox' ? false : '');
      }

      return acc;
    }, {});
  }, [schema]);

  const form = useForm({ defaultValues });
  const formValues = form.watch();

  const buildOptionLabel = (item: any, template?: string) => {
    if (!template) {
      if (item.lastName && item.firstName) {
        return `${item.lastName}, ${item.firstName}`;
      }
      if (item.firstName || item.lastName) {
        return `${item.firstName ?? ''} ${item.lastName ?? ''}`.trim();
      }
      return item.name ?? item.label ?? String(item.value ?? item.id ?? 'Unknown');
    }

    return template.replace(/\{\{\s*(.+?)\s*\}\}/g, (_, key) => item[key] ?? '');
  };

  const parseCurrentPath = (path: string) => {
    const parts = path.split('.');
    if (parts.length >= 3) {
      return {
        group: parts[0],
        index: Number(parts[1]),
      };
    }

    return null;
  };

  const getDynamicOptions = (field: any, currentFieldName?: string) => {
    const sourceGroups = field.optionsSourceGroups ?? (Array.isArray(field.optionsSource) ? field.optionsSource : [field.optionsSource]);
    if (!sourceGroups?.length) {
      return [];
    }

    const valueField = field.optionsSourceValueField ?? 'id';
    const labelTemplate = field.optionsSourceLabelTemplate ?? '{{lastName}}, {{firstName}}';
    const currentItem = currentFieldName ? parseCurrentPath(currentFieldName) : null;

    return sourceGroups.flatMap((groupName: string) => {
      const groupItems = formValues[groupName];
      if (!Array.isArray(groupItems)) return [];

      return groupItems
        .map((item: any, index: number) => ({
          label: buildOptionLabel(item, labelTemplate),
          value: item[valueField] ?? `${groupName}-${index}`,
          group: groupName,
          index,
        }))
        .filter((option) => {
          if (!field.optionsExcludeCurrent || !currentItem) {
            return true;
          }

          return !(option.group === currentItem.group && option.index === currentItem.index);
        });
    });
  };

  const onSubmit = (values: Record<string, unknown>) => {
    console.log('Form submitted:', values);
    alert('Form submitted! Check the console for the payload.');
  };

  if (!schema) {
    return (
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="p-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Form not found</h2>
            <p className="mt-2 text-sm text-gray-600">The requested form could not be loaded.</p>
          </div>
        </div>
      </div>
    );
  }

  const applyMask = (value: string, mask: string): string => {
    if (!mask) return value;
    const numOnly = value.replace(/\D/g, '');
    let result = '';
    let charIndex = 0;

    for (let i = 0; i < mask.length && charIndex < numOnly.length; i++) {
      if (mask[i] === '#') {
        result += numOnly[charIndex];
        charIndex++;
      } else {
        result += mask[i];
      }
    }

    return result;
  };

  const renderFieldInput = (field: any, controllerField: any) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          {...controllerField}
          placeholder={field.placeholder}
          className="min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      );
    }

    if (field.type === 'select') {
      const fieldOptions = field.optionsKey
        ? getOptions(field.optionsKey)
        : field.optionsSource
        ? getDynamicOptions(field, controllerField.name)
        : field.options ?? [];
      return (
        <select
          {...controllerField}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        >
          <option value="">Select {field.label.toLowerCase()}</option>
          {fieldOptions?.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === 'checkbox') {
      return (
        <input
          {...controllerField}
          type="checkbox"
          checked={Boolean(controllerField.value)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      );
    }

    return (
      <Input
        {...controllerField}
        type={field.type}
        placeholder={field.placeholder}
        onChange={(e) => {
          const maskedValue = field.mask ? applyMask(e.target.value, field.mask) : e.target.value;
          controllerField.onChange(maskedValue);
        }}
      />
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="px-6 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Dashboard
            </button>
            <h1 className="mt-3 text-2xl font-semibold text-gray-900">{schema.title}</h1>
            <p className="text-sm text-gray-500">{schema.description}</p>
          </div>
        </div>
      </div>

      <main className="p-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {schema.fields.map((field) => {
                if (field.type === 'group') {
                  if (field.repeatable) {
                    return (
                      <RepeatableFieldGroup
                        key={field.name}
                        field={field}
                        form={form}
                        createEmptyGroupItem={createEmptyGroupItem}
                        renderFieldInput={renderFieldInput}
                      />
                    );
                  }

                  return (
                    <div key={field.name} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">{field.label}</h2>
                        {field.description && <p className="text-sm text-gray-500">{field.description}</p>}
                      </div>
                      {(() => {
                        const gridCols = field.columns ?? 2;
                        const gridColsClass = gridCols === 1 ? 'md:grid-cols-1' : gridCols === 2 ? 'md:grid-cols-2' : gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';
                        return (
                          <div className={`grid gap-4 ${gridColsClass}`}>
                            {field.fields?.map((subField: any) => (
                              <FormField
                                key={`${field.name}-${subField.name}`}
                                control={form.control}
                                name={`${field.name}.${subField.name}`}
                                rules={{
                                  required: subField.required ? `${subField.label} is required.` : false,
                                }}
                                render={({ field: controllerField }) => (
                                  <FormItem>
                                    <FormLabel>{subField.label}</FormLabel>
                                    <FormControl>
                                      {renderFieldInput(subField, controllerField)}
                                    </FormControl>
                                    {subField.description && <FormDescription>{subField.description}</FormDescription>}
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  );
                }

                return (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    rules={{
                      required: field.required ? `${field.label} is required.` : false,
                    }}
                    render={({ field: controllerField }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          {renderFieldInput(field, controllerField)}
                        </FormControl>
                        {field.description && <FormDescription>{field.description}</FormDescription>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Check className="w-4 h-4" />
                  {schema.submitLabel}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
